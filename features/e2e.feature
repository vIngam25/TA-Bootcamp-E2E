Feature: Bootcamp E2E
    Background: Open page and close promo banner if it appears
        Given I am on the home page
        Then I close the promo banner if it appears

    Scenario: Search bar

        When I enter the word "Windows" in the search bar
        Then I click the search
        Then I check that at least one item appears

    Scenario: Internet shop logo button

        When I open "Today's Best Deals" tab
        Then I click on the Internet shop logo
        Then I check that main page opened
