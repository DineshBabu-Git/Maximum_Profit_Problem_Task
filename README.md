# 🏗️ Max Profit Problem

A **JavaScript Project** that finds the **Maximum Possible Earnings** by constructing different types of buildings within a limited construction time.

The application checks **every valid building combination** and **every unique construction order** to determine the most profitable solution.

---

## 📖 Project Overview

Mr. X owns unlimited land and can construct three different types of buildings.

| Building        | Construction Time | Earnings Per Remaining Time Unit |
| --------------- | ----------------- | -------------------------------- |
| Theatre         | 5 Units           | $1500                            |
| Pub             | 4 Units           | $1000                            |
| Commercial Park | 10 Units          | $2000                            |

Only **one building can be under construction at a time.**

The objective is to determine the construction plan that produces the **highest total earnings** within the given available construction time.

---

### Output

Display

- Maximum Earnings
- Remaining Unused Time
- Total Buildings Constructed
- Best Construction Order
- All Optimal Solutions

---

## 💡 How the Profit is Calculated

A building starts earning **only after it is completely constructed**.

Example

Available Time = **13**

Construction Order

```
Theatre
↓

Theatre
```

Timeline

```
0 --------5--------10------13
```

First Theatre

Completed at Time = **5**

Remaining Time = **8**

Profit

```
8 × 1500 = $12000
```

Second Theatre

Completed at Time = **10**

Remaining Time = **3**

Profit

```
3 × 1500 = $4500
```

Total Profit

```
$16500
```

---

## 🧠 Algorithm

The application uses a simple **Brute Force Approach**.

#### Step 1

- Read the available construction time.

↓

#### Step 2

Generate every possible combination of

- Theatre
- Pub
- Commercial Park

↓

#### Step 3

- Ignore combinations that exceed the available construction time.

↓

#### Step 4

- Generate every unique construction order using recursion.

↓

#### Step 5

- Simulate construction one building at a time.

↓

#### Step 6

- Calculate earnings after each building is completed.

↓

#### Step 7

- Compare the profit with the current maximum profit.

↓

#### Step 8

- Store every solution that produces the highest earnings.

↓

#### Step 9

- Display the results on the webpage.

---

## 📂 Folder Structure

```
Max-Profit-Problem/

│── index.html

│── style.css

│── script.js

│── README.md
```

---

## ✨ Features

✅ Beginner-Friendly JavaScript
✅ Responsive Design
✅ Glassmorphism User Interface
✅ Input Validation
✅ Displays Maximum Profit
✅ Displays Remaining Time
✅ Displays Total Buildings
✅ Displays Construction Order
✅ Finds All Optimal Solutions
✅ Uses Brute Force Algorithm
✅ Fully Commented Code

---

## 🖥️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 🚀 How to Run

##### Step 1

- Download the project.
- Extract the folder (if downloaded as ZIP).
- Open

```
index.html
```

using any modern web browser.

- No installation is required.

---

## 🧪 Sample Inputs

#### Example 1

Input

```
7
```

Output

```
Maximum Profit

$3000
```

---

#### Example 2

Input

```
8
```

Output

```
Maximum Profit

$4500
```

---

#### Example 3

Input

```
13
```

Output

```
Maximum Profit

$16500
```

---

## 📄 License

This project open source. It is created for learning & educational purposes.

---
