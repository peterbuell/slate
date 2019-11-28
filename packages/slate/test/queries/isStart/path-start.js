/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <editor>
    <block>
      <cursor />
      one
    </block>
  </editor>
)

export const run = editor => {
  const { anchor } = editor.selection
  return Editor.isStart(editor, anchor, [0])
}

export const output = true
