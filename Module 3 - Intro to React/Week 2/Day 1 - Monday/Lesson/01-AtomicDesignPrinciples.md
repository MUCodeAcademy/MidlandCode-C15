# Atomic Design principles

In our work so far, we talked about breaking things down into smaller components. But we can actually go much smaller. There are multiple ways to handle this, but one of the best ways is using the Atomic design principle. This is going to look unnecessary at first, but it can help MASSIVELY with making components and layouts as reusable as possible. But first, let's take a look at what Atomic Design is. An original blog post [here](https://bradfrost.com/blog/post/atomic-web-design/) lays out the overarching concepts. Simply put, you break out pieces into their individual building blocks and then make those as small as possible. One commonly used example is as follows:

1. Atoms - These are literally individual html tags. They can be styled (which we'll cover more tomorrow) but don't always have to be. Something like an `input` or `label` element
2. Molecules - A combination of individual atoms to serve a singular purpose. To expand above, it could be a form field that combined both an input AND a label.
3. Organisms - Multiple Molecules making up a larger section, like multiple form fields making a form
4. Pages - Just that, an individual page
5. Templates - Overarching layouts for pages

Another example [here](https://github.com/diegohaz/arc/wiki/Atomic-Design)

Something that is worth noting is that the terms above are simply to put it into the atomic / scientific naming scope. Usually this is dropped for more semantic terms. So instead of the above it _could_ be something like:

1. Component (OR simply styled component using names like Input or Label) Could also be combined with number 2 if needed
2. Common (grouped pieces of common functionality)
3. Forms (or something to describe what the specific "organism" is)
4. Pages
5. Templates
