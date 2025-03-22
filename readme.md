# JScience 📊✨

**JScience** is a JavaScript library designed to provide powerful yet simple tools for scientific computing. Whether you're a data scientist, engineer, or math enthusiast, JScience offers essential functionalities for statistical calculations, data normalization, categorical column encoding, and much more.

---

## 🚀 Key Features

- **Statistics**: Calculate mean, standard deviation, correlation, and more.
- **Distributions**: Binomial and Poisson probabilities.
- **Normalization**: Techniques like min-max and z-score.
- **Data Encoding**: One-hot encoding and label encoding.
- **Factorial and Combinatorics**: Calculate factorials and binomial coefficients.

---

## 🧮 Mathematical Concepts

### Pearson Correlation

Pearson correlation measures the linear relationship between two variables. The formula is:

```
r = Σ((xᵢ - x̄)(yᵢ - ȳ)) / √(Σ(xᵢ - x̄)² * Σ(yᵢ - ȳ)²)
```

### Min-Max Normalization

Min-max normalization scales the values of a dataset to the range `[0, 1]`:

```
x' = (x - min(x)) / (max(x) - min(x))
```

### Z-Score

The z-score measures how many standard deviations a value is from the mean:

```
z = (x - μ) / σ
```

### Binomial Probability

Binomial probability calculates the chance of `k` successes in `n` trials:

```
P(X = k) = (n choose k) * pᵏ * (1-p)ⁿ⁻ᵏ
```

### Poisson Probability

The Poisson distribution estimates the probability of `k` events in a fixed interval:

```
P(X = k) = (e⁻ˡ * λᵏ) / k!
```

---

## 📦 Installation

Install the library via npm:

```bash
npm install jscience
```

Or use it directly in the browser:

```html
<script src="https://cdn.jsdelivr.net/npm/jscience"></script>
```

---

## 🛠️ Getting Started

Import the functions you want to use:

```typescript
import { mean, std, corr, minMax } from 'jscience';

const data = [1, 2, 3, 4, 5];
console.log(mean(data)); // Mean
console.log(std(data)); // Standard deviation
```

---

## 📚 Usage Examples

### 1. **Pearson Correlation**

```typescript
import { corr } from 'jscience';

const x = [1, 2, 3, 4];
const y = [2, 4, 6, 8];
console.log(corr(x, y)); // 1 (perfect linear relationship)
```

### 2. **Min-Max Normalization**

```typescript
import { minMax } from 'jscience';

const data = [10, 20, 30];
console.log(minMax(data)); // [0, 0.5, 1]
```

### 3. **Binomial Probability**

```typescript
import { binomial } from 'jscience';

console.log(binomial(10, 3, 0.5)); // Probability of 3 successes in 10 trials
```

### 4. **Poisson Probability**

```typescript
import { poisson } from 'jscience';

console.log(poisson(2, 3)); // Probability of 3 events with a mean of 2
```

### 5. **One-Hot Encoding**

```typescript
import { oneHotEncoding } from 'jscience';

const data = [{ color: 'red' }, { color: 'blue' }, { color: 'red' }];
const { rows, columns } = oneHotEncoding(data, ['color']);
console.log(rows); // [{ color_red: 1, color_blue: 0 }, ...]
```

---

## 📖 Full Documentation

### Statistics

- **`mean(x: number[]): number`**: Calculates the mean.
- **`std(x: number[]): number`**: Calculates the standard deviation.
- **`corr(x: number[], y: number[]): number`**: Calculates the Pearson correlation.

### Normalization

- **`minMax(x: number[]): number[]`**: Normalizes data to the range `[0, 1]`.
- **`standardize(x: number[]): number[]`**: Normalizes data using z-score.

### Distributions

- **`binomial(n: number, k: number, p: number): number`**: Calculates binomial probability.
- **`poisson(lambda: number, k: number): number`**: Calculates Poisson probability.

### Data Encoding

- **`oneHotEncoding(rows: any[], columns: string[]): { rows: any[], columns: string[] }`**: Encodes categorical columns using one-hot encoding.
- **`labelEncoding(rows: any[], columns: string[]): { rows: any[], mappings: Record<string, Record<any, number>> }`**: Encodes categorical columns using label encoding.

---

## 🧑‍💻 Contributing

Contributions are welcome! Follow the steps below to contribute:

1. Fork the repository.
2. Create a branch for your feature: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'My new feature'`.
4. Push to the remote repository: `git push origin my-feature`.
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 🌟 Acknowledgments

Thank you for using **JScience**! If you enjoyed it, don't forget to give the repository a ⭐. 😊
