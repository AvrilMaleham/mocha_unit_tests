import { expect } from "chai";

describe("Fun and Interesting Unit Tests", function () {
  it("should return the sum of two numbers", function () {
    function sum(a, b) {
      return a + b;
    }
    expect(sum(2, 3)).to.equal(5);
    expect(sum(-1, 1)).to.equal(0);
  });

  it("should return an emoji for a string keyword", function () {
    function getEmoji(keyword) {
      if (keyword === "smile") {
        return "😊";
      } else if (keyword === "cry") {
        return "😢";
      } else if (keyword === "heart") {
        return "❤️";
      } else {
        return undefined;
      }
    }
    expect(getEmoji("smile")).to.equal("😊");
    expect(getEmoji("cry")).to.equal("😢");
    expect(getEmoji("heart")).to.equal("❤️");
    expect(getEmoji("unknown")).to.be.undefined;
  });

  it("should count the number of emojis in a string", function () {
    function countEmojis(str) {
      const emojiRegex = /([\uD800-\uDBFF])/g;
      const matches = str.match(emojiRegex);
      return matches ? matches.length : 0;
    }
    expect(countEmojis("😊😊😢")).to.equal(3);
    expect(countEmojis("Hello 😊! How are you?")).to.equal(1);
    expect(countEmojis("No emojis here!")).to.equal(0);
  });

  it("should replace certain words with emojis", function () {
    function replaceWithEmojis(str, emojis) {
      const arr = str.split(" ");

      if (arr.includes("happy")) {
        const i = arr.indexOf("happy");
        arr[i] = emojis.happy;
        const newStr = arr.join(" ");
        return newStr;
      } else if (arr.includes("sad")) {
        const i = arr.indexOf("sad");
        arr[i] = emojis.sad;
        const newStr = arr.join(" ");
        return newStr;
      } else {
        const i = arr.indexOf("love");
        arr[i] = emojis.love;
        const newStr = arr.join(" ");
        return newStr;
      }
    }
    const emojis = {
      happy: "😊",
      sad: "😢",
      love: "❤️",
    };
    expect(replaceWithEmojis("I am happy", emojis)).to.equal("I am 😊");
    expect(replaceWithEmojis("I am sad", emojis)).to.equal("I am 😢");
    expect(replaceWithEmojis("I love you", emojis)).to.equal("I ❤️ you");
  });

  it("should check if a number is odd", function () {
    function isOdd(num) {
      return num % 2 != 0;
    }
    expect(isOdd(1)).to.be.true;
    expect(isOdd(4)).to.be.false;
    expect(isOdd(17)).to.be.true;
  });

  it("My granny stopped eating green apples when she lost her teeth.", function () {
    const eatsGreenApples = (person) => {
      return person.hasTeeth;
    };
    const granny = {
      hasTeeth: false,
      age: 72,
      name: "Granny Smith",
    };
    expect(eatsGreenApples(granny)).to.be.false;
  });

  it("My great granny still loves eating green apples as she has teeth.", function () {
    const eatsGreenApples = (person) => {
      return person.hasTeeth;
    };
    const greatGranny = {
      hasTeeth: true,
      age: 85,
      name: "Glamma",
    };
    expect(eatsGreenApples(greatGranny)).to.be.true;
  });

  it("People should stop eating junk food at age 40 and above", function () {
    const canEatJunkFood = (person) => {
      return person.age <= 40;
    };
    const uncleBob = {
      hasTeeth: true,
      age: 49,
      name: "Donald Duck",
    };
    expect(canEatJunkFood(uncleBob)).to.be.false;
    const youngTom = {
      hasTeeth: true,
      age: 25,
      name: "Tom",
    };
    expect(canEatJunkFood(youngTom)).to.be.true;
  });

  it("should reverse a string", function () {
    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    expect(reverseString("hello")).to.equal("olleh");
    expect(reverseString("world")).to.equal("dlrow");
  });

  it("should remove duplicates from an array", function () {
    const removeDuplicates = (arr) => {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    };
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
    expect(removeDuplicates(["a", "a", "b", "b", "c"])).to.deep.equal([
      "a",
      "b",
      "c",
    ]);
  });

  it("should find the first even number in an array", function () {
    const findFirstEven = (arr) => {
      return arr.find((item) => item % 2 === 0);
    };
    expect(findFirstEven([1, 3, 7, 8, 10])).to.equal(8);
    expect(findFirstEven([1, 3, 5, 7])).to.be.undefined;
  });

  it("should filter out all non-positive numbers from an array", function () {
    const filterNonPositive = (arr) => {
      return arr.filter((item) => item > 0);
    };
    expect(filterNonPositive([1, -2, 3, 0, -5, 6])).to.deep.equal([1, 3, 6]);
    expect(filterNonPositive([-1, -2, -3])).to.deep.equal([]);
  });

  it("should count the occurrences of a value in an array", function () {
    const countOccurrences = (arr, value) => {
      return arr.filter((item) => item == value).length;
    };
    expect(countOccurrences([1, 2, 2, 3, 2, 4], 2)).to.equal(3);
    expect(countOccurrences([1, 2, 3, 4], 5)).to.equal(0);
  });

  it("should convert a JSON array of customers to CSV string format", function () {
    const jsonToCsv = (customers) => {
      const headers = Object.keys(customers[0]).join(",");
      const dataRows = customers.map((customer) =>
        Object.values(customer).join(",")
      );
      return `${headers}\n${dataRows.join("\n")}`;
    };
    const customers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-555-5556",
      },
    ];
    const csv =
      "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556";
    expect(jsonToCsv(customers)).to.equal(csv);
  });

  it("should convert a CSV string to an array of JSON objects", function () {
    const csvToJson = (csv) => {
      const lines = csv.split("\n");

      const keys = lines[0].split(",");

      const customers = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",");
        const obj = {};

        keys.forEach((key, index) => {
          if (key === "id") {
            obj[key] = Number(values[index]);
          } else {
            obj[key] = values[index];
          }
        });

        customers.push(obj);
      }

      return customers;
    };
    const csv =
      "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556";
    const customers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "555-555-5556",
      },
    ];
    expect(csvToJson(csv)).to.deep.equal(customers);
  });
});
