# AuthentaWiki/Wiki-Reliable 
###### Codename: We can't commit to a name

The goal of the AuthetaWiki/Wiki-reliable project is to make evaluating the reliability of a wikipedia article effortless. We intend to develop a Chrome Extension which analyzes and displays reliability indexes for a given article to the user.


### Project Milestones:
1. Proof of life  
  a. extension pulls any data from wikipedia  
        Pop-up on-click extension button pops-up window displaying any information pulled from the wikipedia article currently being viewed.
  b. pulls any editing data  
        Pop-up displays any editing data pulled from the article stastics page  
  c. pull all relevent editing data  
        Pulls all the data needed to compute a reliability score. Does not need to be displayed in pop-up except in debugging state.  
2. Proof of concept  
  a. formats data  
        Formats and displays data pulled from the article statstics page in a way usable by other APIs or by our own index calculator  
  b. calculates an index  
        calculates a reliability index using data pulled from article statistics page. Possibly uses third party API to calculate document score.
3. Optimization  
  a. optimize reliability index   
        Make the document reliability score better. I.e. improve our method, or improve upon someone elses. We're not clear quite exactly this will entail, mostly it will probably mean cleaning up our code and fixing things.  
  b. visualize reliability on page  
        In essence, draw a pretty picture. Add an in-line element to an article page displaying the reliability index. Potentially manipulate portions of the text to high light those phrases and sections which are less reliable.
        
4. Portability  
  a. mediawiki compatible
        Make extension compatable with most MediaWikis (not all because there will always be some outside case that does things in an odd of unexpected way.
 
### Technology Used:
- [Chrome Extention](http://developer.chrome.com/extensions/index.html)
- [Chrome API](http://developer.chrome.com/extensions/api_index.html)
- JavaScript
- Potentially [WikiTrust API](http://www.wikitrust.net/vandalism-api)

### Stakeholders:
- Chrome users of Wikipedia
- Developers interested in pulling data from Wikipedia or other MediaWiki's.

### Related Projects:
- [WikiTrust](http://www.wikitrust.net/)
- [Wiki-Watch](http://en.wiki-watch.de/)
- [Wikibu](http://www.wikibu.ch/)
