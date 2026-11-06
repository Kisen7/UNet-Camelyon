# Original paper figures

Source: **MSAF-UNet: A Robust Segmentation Method Integrating Traditional Image Processing and Multi-Scale Attention Fusion**, *IEEE Signal Processing Letters*, vol. 32, pp. 3415–3419, 2025. DOI: [10.1109/LSP.2025.3585818](https://doi.org/10.1109/LSP.2025.3585818).

These PNGs are direct crops rendered from the published paper, preserving the original diagrams, heatmaps, colors, labels and numerical values.

| File | Original item | PDF page | Printed page | Pixels | Width / height | Content |
| --- | --- | ---: | ---: | --- | ---: | --- |
| `architecture.png` | Fig. 1, panels (a) and (b) | 2 | 3416 | 1170 × 1112 | 1.052 | Complete network and preprocessing path, followed by the multi-scale attention fusion module. Both subfigure labels are retained. |
| `box-prompts.png` | Fig. 2 | 3 | 3417 | 1150 × 298 | 3.859 | Four box-prompt examples. Green boxes indicate network input regions; blue ellipses are detected with the generalized Hough transform. |
| `patch-results.png` | Fig. 3 | 4 | 3418 | 1160 × 766 | 1.514 | Patch-level qualitative comparison: input, reference mask, and the original prediction heatmaps. Rows correspond to CAMELYON16, CAMELYON17, and EBHI-Seg. Original method labels are retained. |
| `wsi-results.png` | Fig. 4 | 4 | 3418 | 1162 × 782 | 1.486 | Whole-slide comparison for CAMELYON16 test WSI 40, including the original image panels, heatmaps, scale bars and method labels. |
| `ablation-table.png` | Table I | 4 | 3418 | 2020 × 466 | 4.335 | Ablation of the MSAF, preprocessing and box-prompt components on the three datasets. Includes the original table title, headers and all rows. |
| `comparison-table.png` | Table II | 4 | 3418 | 1974 × 546 | 3.615 | Quantitative comparison with TransUNet, Swin-UNet, TransAttUNet, DA-TransUNet and UNeXt. Includes the original table title, headers, emphasis and all rows. |

The explanatory figure captions were excluded from the image crops; figure panel labels and legends were retained. Table captions remain inside the table crops. No adjacent body text, running headers, page numbers or download footer appears in the PNGs.

## Extraction and verification

Renderer: Poppler `pdftoppm`, PNG output, original page long side rendered at 3600 pixels. The source page size is 594 × 792 PDF points; the full render is 2700 × 3600 pixels. Crop coordinates below use a top-left pixel origin in that full render.

| File | Crop x | Crop y | Crop width | Crop height |
| --- | ---: | ---: | ---: | ---: |
| `architecture.png` | 180 | 300 | 1170 | 1112 |
| `box-prompts.png` | 1364 | 288 | 1150 | 298 |
| `patch-results.png` | 184 | 1400 | 1160 | 766 |
| `wsi-results.png` | 182 | 2436 | 1162 | 782 |
| `ablation-table.png` | 350 | 288 | 2020 | 466 |
| `comparison-table.png` | 370 | 800 | 1974 | 546 |

Source PDF SHA-256: `8571f4cbdab79f41ca670228db8e52308eff8750b95a8fa27c38e47e6a0ad288`.

All six final crops were visually checked against the rendered source pages for complete edges, legible labels, preserved colors and absence of adjacent body text. Temporary full-page previews were removed after verification.
