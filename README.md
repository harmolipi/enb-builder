# Electronic News Bulletin (ENB) Builder
A simple purpose-made tool for injecting my organization's email template with updated content on a regular basis.

## About
At work, one of my tasks is to assemble and send out email news bulletins every week. I generally stick to the same format every time using a consistent design containing the following pieces of content:
- 1 lead article consisting of:
  - Lead article title
  - Lead article image
  - Lead article body
  - Lead article action button (optional)
- A few sub-items, each including:
  - Sub-item title
  - Sub-item image
  - Sub-item body
  - Sub-item action button (optional)

Until now, every week, I've just been copying/pasting the previous week's email's HTML, and manually changing out the contents of each of those elements, which is extremely time consuming (but I just kept doing it instead of finding a better way, for some reason).

But now, I decided to come up with a better way. I'm about to be out of the office for a couple weeks, and need to train someone else to handle this while I'm gone. Because the prospect of showing them my current workflow is so intimidating, I figured it would be easier to just create a purpose-made editor with react, where the above elements can just be pasted in, and will appear in both a preview element, and in a textbox as HTML they can paste into our email sending service.

Also, this is just a good project to practice using what I've been learning.

## Usage
Go to https://harmolipi.github.io/enb-builder/ and fill out the fields as needed. Preview will update as you type. You can click to maximize either of those panes, and data will be stored in your browser's localStorage so it's likely not lost if you close the page. When you're ready, click "Show HTML" at the bottom and click to copy that HTML into the body of the email elsewhere.

## Setup
```console
npm install
npm start
```
