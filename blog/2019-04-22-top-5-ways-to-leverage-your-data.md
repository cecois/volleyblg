---
title: "Top 5 (1) Ways to Leverage Your Data"
path: /top-5-ways-to-leverage-your-data
summary: "Going from data to solution can be daunting. Here we present our cardinal advice for starting out alone."
date: 2019-04-22
tags: ['advice']
---

### Your Data
You have data. It's your business' clientele accounts, it's inventory, it's sales; your personal digital photo collection; your Twitter history; that Moleskin that's wearing down in the side pocket of your bag, even -- it's all (mostly) structured and codified, it's all (mostly) mutable and transferrable, and...that's all you need, really, to begin enriching those data, in fact leveraging them toward a better understanding of your clientele, your own operation, or the community in which you operate. Let's take the simplest example:

		ID,NAME,ADDRESS,OCCUPATION  
		092883,Tessa Tompkins,"111 MLK Blv, Springfield",Tugboat Captain  
		105330,Gut W. Hauptmann,"1932 Lindbergh, Columbus, Ohio",Carpenter  
		382947,Paul Reubens,"555 Hollywood St, Hollywood, CA",Being Pee-wee

("The simplest example," we called that. Truth is there are *dozens* of data problems in those three lines alone...that for now we are going to unsummarily ignore.)

### Iteration #1
The only point to make right now — and this is the mantra at the core of this blog and our service both — is the importance of patient and attentive *iteration.* To do anything with even that /\ block of data you'll need to carefully *iterate* over it. You'll need to iterate over the three rows, then for each row you'll need to iterate over the individual fields (doing something with one or more of them), and this whole procedure will be iterated many times, most likely. Iteration!
<aside class="pquote-r">
    <blockquote>
        <p>this is the mantra at the core of this blog and our service both — the importance of patient and attentive iteration</p>
    </blockquote>
</aside>
Sending those addresses through a geocoder, for example, is very probably going to be a trial-and-error thing. A geocoder is going to return multiple results for "111 MLK Blv, Springfield," for example (or none at all), because there's no state attribute. Which Springfield? Which country, for that matter? All of the Springfields in the US probably have MLK Boulevards (or streets, roads, lanes, highways, etc.) The first time you get 50 possible results for that one attribute you're going to quickly realize your datum is missing something. Then you're going to fix that (ideally finding and fixing *all* such issues in your source set) and send the whole batch out again.

Ultimately, though. Once you're finished babysitting the procedure again (and again and again) and you have a computer doing this work for you reliably, you get to sit back with your feet up and your shades on -- 80s cool-guy style -- and reap the benefits of having richer, more agile, and cleaner data.


### Iteration #2 (Get It?)

<aside class="pquote-l">
    <blockquote>
        <p>if you're not prepared to *inch* toward your goal, the likelihood of giving up skyrockets</p>
    </blockquote>
</aside>
Ultimately, if you set out to do something with your data and you're not prepared to positively *inch* toward your goal, the likelihood of you giving up in frustration skyrockets. Instead, if you iterate, iterate, iterate you'll not only experience little spikes of success along the way, you'll end up with a better sense of what's actually happening all the way through the workflow.