#lang racket

;; Alamasyarie - Main Program
;; A simple Racket application

;; Returns a greeting message
(define (greet name)
  (format "Hello, ~a! Welcome to Alamasyarie Racket Project." name))

;; Main entry point of the application
(define (main)
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
