//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from "./person";

const Sarah = new Person("Sarah");

Sarah.greet();

// This snippet imports the Person class and uses it to create an instance.