import { Article } from '../types/portfolio';

export const articles: Article[] = [
  {
    slug: 'ai-systems',
    title: '01_AI_SYSTEMS.MDX',
    category: 'AI & SYSTEMS',
    date: '2026-06-15',
    summary: 'Evaluating memory bottlenecks and computational latency in local vision models on low-power architectures.',
    content: `## Designing Low-Latency Edge Inference

In this technical note, I analyze memory bandwidth constraints during edge model inference. When executing vision networks like ResNet or quantized YOLOs on commodity edge modules, execution latency is dominated not by FLOPs, but by memory access delays.

### The Bottleneck: Memory Bound Operations

On edge CPUs or micro-GPUs, retrieving weight vectors from RAM to the register file represents a significant power and time penalty compared to the actual Multiply-Accumulate (MAC) calculations.

\`\`\`
+-----------------------+       Slow Bus       +-------------------+
|      System RAM       | ===================> |    Cache Line     |
| (Model Weights, 80MB) |                      | (Registers, 512B) |
+-----------------------+                      +-------------------+
                                                        ||
                                                        || Fast Load
                                                        v
                                               +-------------------+
                                               |     ALU / MAC     |
                                               |  (Floating Point) |
                                               +-------------------+
\`\`\`

To mitigate this bottleneck, we explore:
1. **Weight Quantization**: Downscaling FP32 representations to INT8.
2. **Channel Pruning**: Removing low-impact kernels entirely to compress dimensions.
3. **Operator Fusion**: Combining adjacent operations (e.g., Conv2D + BatchNorm + ReLU) into a single execution step to reuse data loaded into local cache.

### Performance Observations

Our benchmarks indicate that compiling models to targeted hardware targets (e.g., using ONNX Runtime with OpenVINO or TensorRT Execution Providers) yields speedups of up to 2.4x on edge chips without modifying original network architectures.`
  },
  {
    slug: 'finance-notes',
    title: '02_FINANCE_NOTES.MDX',
    category: 'FINANCE',
    date: '2026-05-10',
    summary: 'Observations on mean-reversion anomalies, risk control, and transaction cost modeling in backtesting regimes.',
    content: `## Backtesting Realities and Execution Drag

Quantitative finance models frequently fail when transitioning from clean, offline historical series to execution in live markets. This log notes major findings from designing and backtesting statistical mean-reversion strategies.

### 1. The Cost of Overfitting
When parameters (such as entry thresholds, rolling windows, and holding periods) are tuned too closely to historical data, performance collapses during test phases. Applying cross-validation splits and modeling regime-shifts helps identify if a parameter set is fragile.

### 2. Transaction Drag
A strategy that appears highly profitable at $0.00$ fee assumptions can easily become negative when transaction taxes, exchange commissions, and bid-ask spreads are introduced.

| Cost Level (bps) | Annual Return (Raw) | Annual Return (Adjusted) |
| ---------------- | ------------------- | ------------------------ |
| 0 bps            | +14.2%              | +14.2%                   |
| 1 bps            | +14.2%              | +11.8%                   |
| 5 bps            | +14.2%              | +2.4%                    |
| 10 bps           | +14.2%              | -7.8%                    |

### 3. Execution Assumptions
Always model slippage. Assuming orders fill exactly at the historical bar close price is a common mistake; in reality, your entry is often worse due to order book queues and latency.`
  },
  {
    slug: 'building-products',
    title: '03_BUILDING_PRODUCTS.MDX',
    category: 'TECHNOLOGY STRATEGY',
    date: '2026-04-02',
    summary: 'A systems-level review of building products, technical debt, and aligning features with system limits.',
    content: `## Technical Strategy: Aligning Scale with Execution

Building a product from scratch requires managing a delicate balance: satisfying immediate user needs while avoiding architectural dead-ends.

### Scaling Bottlenecks
Many early-stage builders assume scaling issues are solved by switching databases or hosting providers. In practice, bottlenecks usually stem from:
* **Unnecessary Joins**: Running complex multi-table queries without indexing.
* **Synchronous Workloads**: Performing heavy operations (like PDF generation or image compression) directly in the HTTP request-response cycle.
* **Microservices Overhead**: Setting up separate service nodes before the domain boundaries are mature, leading to network hop delays.

### Managing Technical Debt
Debt is a tool. Taking on debt to release a prototype is acceptable, provided there is a structured mechanism to pay it back. The key is to document system design decisions in clear design logs (ADRs) to allow future engineers to understand the constraints and trade-offs of the original implementation.`
  }
];
