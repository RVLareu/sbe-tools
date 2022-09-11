Feature: VIP clients receive free shipment buying 5 or more books
  Everybody loves free shipment when they buy online

  Scenario Outline: Does the client get free shipment
    Given the client is "<typeOfClient>"
    Given the client bought <amountOfBooks>
    When the client wants to pay for the cart
    Then the shipment should be "<shipment>"

  Examples:
    | typeOfClient  | amountOfBooks | shipment    |
    | VIP           |      4        |   charged   |
    | VIP           |      5        |   free      |
    | VIP           |      6        |   free      |
    | noVIP         |      4        |   charged   |
    | noVIP         |      5        |   charged   |
    | noVIP         |      6        |   charged   |

    