namespace PersonalWebsite.Models;

public class ProjectViewModel
{
    public string Title { get; set; } = default!;
    public string Description { get; set; } = default!;
    public string Url { get; set; } = default!;
}

public class BlogPostViewModel
{
    public string Title { get; set; } = default!;
    public string Summary { get; set; } = default!;
    public DateTime Date { get; set; }
    public string Slug { get; set; } = default!;
    public string HtmlContent { get; set; } = default!;
}

public class NoteViewModel
{
    public string Title { get; set; } = default!;
    public string Excerpt { get; set; } = default!;
    public string Category { get; set; } = default!;
}
