Feature: VIP clients receive free delivery buying 5 or more books
  Everybody loves free delivery when they buy online

  Scenario Outline: Does the client get free delivery
    Given the client is "<typeOfClient>"
    Given the client bought <amountOfBooks>
    When the client wants to pay for the cart
    Then the delivery should be "<delivery>"

  Examples:
    | typeOfClient  | amountOfBooks | delivery    |
    | VIP           |      4        |   charged   |
    | VIP           |      5        |   free      |
    | VIP           |      6        |   free      |
    | noVIP         |      4        |   charged   |
    | noVIP         |      5        |   charged   |
    | noVIP         |      6        |   charged   |

    