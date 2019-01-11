module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  filters.withId = function(things, id) {
    return things.find(function (thing) {
      return thing.id === id;
    });
  };

  filters.includes = function(things, it) {
    return things.includes(it);
  };

  filters.normaliseMultiQueryParam = function(queryParam) {
    if (queryParam instanceof Array)
      return queryParam
    if (typeof queryParam === "string")
      return [queryParam]
    return []
  };
  
  filters.searchAndFilter = function(docs, searchTerms, legislationFilter) {
    const filteringOn = legislationFilter && legislationFilter.length !== 0
    const searchingOn = searchTerms && searchTerms.length !== 0
    return docs.filter(doc => {
      if (filteringOn) {
        const matchesFilter = doc.accs.some(acc => 
          legislationFilter.includes(acc.name)
        )
        if (matchesFilter) {
          return true
        }
      }
      
      if (searchingOn) {
        const match = searchTerms.trim().split(' ').some(term => {
          const searchables = [
            doc.body.number,
            doc.body.name,
            doc.body.contact.email,
            doc.body.contact.phoneNumber,
            doc.body.contact.address,
          ].concat(doc.accs.flatMap(acc => acc.rows.flatMap(row => row.products.concat(row.procedures))))
          // TODO Add acc.name to searchable???
          return searchables.some(searchable => searchable && 
            searchable.toLowerCase().indexOf(term.toLowerCase()) !== -1
          )
        })
        if (match) {
          return true
        }
      }
      if (filteringOn || searchingOn) {
        // If we reached this far, then the doc doesn't match the search nor the filter
        return false
      }
      return true
    })
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
