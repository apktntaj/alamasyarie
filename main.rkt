#lang racket

;; Alamasyarie - Main Program
;; A simple Racket application

(define (greet name)
  "Returns a greeting message"
  (format "Hello, ~a! Welcome to Alamasyarie Racket Project." name))

(define (main)
  "Main entry point of the application"
  (displayln "===========================================")
  (displayln "  Alamasyarie - Racket Project")
  (displayln "===========================================")
  (newline)
  (displayln (greet "World"))
  (newline)
  (displayln "This is a fresh Racket project.")
  (displayln "You can start building your application here.")
  (newline))

;; Run the main function when this file is executed
(main)
