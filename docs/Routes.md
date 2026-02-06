1. blog/[[...slug]] – Blog entrance + blog articles
How students should imagine it

“Whether I just enter the blog area, or I walk deeper into a specific article, I’m still inside the blog.”

Real URLs
/blog               → Blog homepage (list of posts)
/blog/my-first-post → A specific article
/blog/2026/nextjs   → A specific article or archive

Why [[...slug]]?

The blog can be empty

Entering /blog is valid

Going deeper is optional

Simple explanation

“You can stop at the blog entrance, or you can walk inside to read something.”

Mental picture

/blog = browsing shelves

/blog/something = picking a book

2. category/[...category] – Categories must be chosen
How students should imagine it

“You cannot view a category page unless you actually choose a category.”

Real URLs
/category/technology
/category/technology/nextjs
/category/gaming/hytale


❌ Invalid:

/category

Why [...category]?

A category must exist

/category alone makes no sense

Users must choose something

Simple explanation

“You must pick a category before you can see anything.”

Mental picture

/category = standing outside without choosing a section ❌

/category/gaming = you picked a section ✅

Easy Comparison Table (Student Version)
Route	What it means in real life
blog/[[...slug]]	You may enter the blog or read a post
category/[...category]	You must choose a category
[[...slug]]	Optional path
[...category]	Required path