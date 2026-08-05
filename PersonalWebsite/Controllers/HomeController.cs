using System.Diagnostics;
using System.IO;
using Markdig;
using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Models;

namespace PersonalWebsite.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Projects()
    {
        var projects = new[]
        {
            new ProjectViewModel { Title = "Pesisir", Description = "A custom web application for managing and displaying information.", Url = "https://pesisir.id" },
        };

        return View(projects);
    }

    private IEnumerable<BlogPostViewModel> GetBlogPosts()
    {
        var folder = Path.Combine(Directory.GetCurrentDirectory(), "Content", "Blog");
        if (!Directory.Exists(folder))
        {
            return Enumerable.Empty<BlogPostViewModel>();
        }

        var pipeline = new MarkdownPipelineBuilder().UseAdvancedExtensions().Build();
        return Directory.EnumerateFiles(folder, "*.md")
            .Select(path => ParseBlogPost(path, pipeline))
            .OfType<BlogPostViewModel>()
            .OrderByDescending(post => post.Date);
    }

    private BlogPostViewModel? ParseBlogPost(string path, MarkdownPipeline pipeline)
    {
        var text = System.IO.File.ReadAllText(path);
        var lines = text.Replace("\r\n", "\n").Split('\n');
        var title = string.Empty;
        var summary = string.Empty;
        var date = DateTime.MinValue;
        var slug = Path.GetFileNameWithoutExtension(path);
        var contentStart = 0;

        if (lines.Length > 0 && lines[0].Trim() == "---")
        {
            for (var i = 1; i < lines.Length; i++)
            {
                if (lines[i].Trim() == "---")
                {
                    contentStart = i + 1;
                    break;
                }

                var line = lines[i];
                var colonIndex = line.IndexOf(':');
                if (colonIndex <= 0)
                {
                    continue;
                }

                var key = line[..colonIndex].Trim();
                var value = line[(colonIndex + 1)..].Trim();
                if (key.Equals("Title", StringComparison.OrdinalIgnoreCase))
                {
                    title = value;
                }
                else if (key.Equals("Summary", StringComparison.OrdinalIgnoreCase))
                {
                    summary = value;
                }
                else if (key.Equals("Date", StringComparison.OrdinalIgnoreCase) && DateTime.TryParse(value, out var parsedDate))
                {
                    date = parsedDate;
                }
                else if (key.Equals("Slug", StringComparison.OrdinalIgnoreCase) && !string.IsNullOrWhiteSpace(value))
                {
                    slug = value;
                }
            }
        }

        var content = string.Join("\n", lines.Skip(contentStart)).Trim();
        if (string.IsNullOrEmpty(title))
        {
            title = slug.Replace('-', ' ');
        }

        if (string.IsNullOrEmpty(summary))
        {
            summary = content.Split(new[] {"\n\n"}, StringSplitOptions.RemoveEmptyEntries)
                .Select(paragraph => paragraph.Trim())
                .FirstOrDefault() ?? string.Empty;
        }

        if (date == DateTime.MinValue)
        {
            date = System.IO.File.GetLastWriteTime(path);
        }

        return new BlogPostViewModel
        {
            Title = title,
            Summary = summary,
            Date = date,
            Slug = slug,
            HtmlContent = Markdown.ToHtml(content, pipeline)
        };
    }

    public IActionResult Blog()
    {
        var posts = GetBlogPosts();
        return View(posts);
    }

    [Route("blog/{slug}")]
    public IActionResult BlogPost(string slug)
    {
        if (string.IsNullOrEmpty(slug))
        {
            return NotFound();
        }

        var post = GetBlogPosts().FirstOrDefault(p => string.Equals(p.Slug, slug, StringComparison.OrdinalIgnoreCase));
        if (post == null)
        {
            return NotFound();
        }

        return View(post);
    }

    public IActionResult Notes()
    {
        var notes = new[]
        {
            new NoteViewModel { Title = "Big-O Notation", Excerpt = "Understanding time and space complexity trade-offs.", Category = "Algorithms" },
            new NoteViewModel { Title = "REST vs GraphQL", Excerpt = "Comparing API design patterns and when to use each.", Category = "Web" },
            new NoteViewModel { Title = "Navigating Git", Excerpt = "Common commands and branching workflows for collaboration.", Category = "Tools" }
        };

        return View(notes);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

