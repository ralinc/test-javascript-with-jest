# Test JavaScript with Jest

## Automated Testing: End to End

### Introduction to Software Testing

* Why Automated Testing?
    * quality: happy users, happy business, happy devs = successful business
    * reduce stress: no firefighting in production
    * cost reduction: find bugs in development not in production
    * documentation

* Automated vs Manual Testing
    * manual tests are suitable for edge cases, UI, UX
    * automated tests are fast and free to run
    * automated tests can run any time (on each change)

* Types of Automated Tests
    * Test Pyramid (unit > integration > UI)
    * Unit: test things in isolation (fast, stable)
    * Integration: test things together
    * UI: test from user perspective (slow, brittle)

### Unit Testing: Testing in Isolation

* What is unit testing?
    * Test the behavior of one object
    * Test only the public API
    * Stub all collaborators

* Conceptual Phases: AAA
    * Arrange
    * Act
    * Assert

* Test Doubles
    * Stub: a double with pre-defined answer
    * Mock: a double who asserts interaction
    * Fake: a double with the same but fake public API

* Good Practices
    * Test all logical paths (positive and negative)
    * Test all edge cases (boundary values)
    * Test a single behavior in a sinle test (one assertion)
    * Test code should be production grade (readable & fast)
    * Write a test for each found bug

* Bad Practices
    * Test is too big => refactor the SUT
    * Test without stubbing collaborators
    * Test multiple behaviors (multiple asserts)
    * Access to external resources (file system, database, network)
    * Sharing state between tests
    * Test execution depends on order
    * Not repeatable/predictable (ex: time)

### Integration Testing

* What is Integration Testing?
    * Testing things work together
    * Communication between parts of the system
    * Work with external resources (file system, database, network)

* Why test in integration?
    * Catch misunderstanding in objects interactions
    * Test logical subsystem
    * Test interface contracts

* Good Practices
    * Think about value vs cost
    * Production grade test code
    * Find a bug -> write a test

* Bad Practices
    * Test SUT edge cases
    * Test SUT low-level behavior

* Levels of Integration Testing
    * Test internal objects
    * Test external component interactions
    * Test internal logical subsystems
    * Test application service layer

### Functional UI Testing

* What is Functional UI Testing?
    * Testing things at the user interface level
    * Verify system behavior at the highest level

* Why?
    * Test a complete vertical slice
    * Test UI is wired-up correctly to the backend
    * Test UI centric concerns

* Good Practices
    * DRY: Page Object Model (POM)
    * DRY: Logical Functional Model (LFM)

* Bad Practices
    * Testing the whole system through the UI
    * Testing design cosmetics

* Choosing a UI automation tool
    * record/playback
    * coded

## Unit Testing JavaScript with Jest

* What is Jest?
   * Jasmine-based unit testing framework (Jasmine on steroids)

* Why Jest?
   * Great for testing component-based applications
   * Delightful testing with virtual DOM (React)
   * Automated mocking of dependencies
   * No need for headless browser
   * Build-in test coverage (Istanbul)

* Automated Mocking
    * mocks all `require` statements
    * jQuery, Underscore are not mocked
    * `jest.dontMock` the SUT
    * can be toggled on/off

* The Jest API
    * Define the SUT using `dontMock`
    * Group tests in a `describe()` block
    * Define a single test with `it()` or `test()`
    * Jasmine-like `expect(value).toBe(other)`
    * Snapshot testing
    * Asynchronous testing
