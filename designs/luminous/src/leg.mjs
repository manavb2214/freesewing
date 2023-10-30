import { points } from './points.mjs'

export const leg = {
  name: 'luminous.leg',
  from: points,
  draft: ({ sa, Point, points, Path, paths, Snippet, snippets, options, macro, part }) => {
    paths.seam = new Path()
      .move(points.frontSplitHem)
      .join(paths.backSplit.reverse())
      .join(paths.crossSeamBack.reverse())
      .join(paths.crossSeamFront)
      .join(paths.frontSplit)
      .close()

    if (sa) paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')

    return part
  },
}
