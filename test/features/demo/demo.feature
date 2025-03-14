Feature: Demo feature

  
    
    @demo
    Scenario Outline: Running the first demo feature

        Given Google page is opened
        When Search with <SearchItem>
        Then click on first search result
        Then url should match <ExpectedURL>




        Examples:
            | TestID     | SearchItem | ExpectedURL |
            | DEMO_TC001 | WDIO       | https://wdvdfebdriver.io/  |
