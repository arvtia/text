export function getBlockContainer(range) {
  let node = range.startContainer;
  if (node.nodeType === 3) node = node.parentElement;
  while (node && node !== document.body) {
    const display = window.getComputedStyle(node).display;
    if (display === "block" || /^(P|DIV|LI|H[1-6]|BLOCKQUOTE|SECTION|ARTICLE)$/.test(node.tagName)) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

export function applyStyleToBlock(range, styleObj) {
  const block = getBlockContainer(range);
  if (!block) return false;
  Object.keys(styleObj).forEach((k) => {
    block.style[k] = styleObj[k];
  });
  return true;
}

export function applyInlineWrap(range, tagName, styleObj = {}) {
  try {
    const wrapper = document.createElement(tagName);
    Object.assign(wrapper.style, styleObj);
    range.surroundContents(wrapper);
    return true;
  } catch (e) {
    // selection may cross nodes; fallback: extractContents and reinsert
    const frag = range.extractContents();
    const wrapper = document.createElement(tagName);
    Object.assign(wrapper.style, styleObj);
    wrapper.appendChild(frag);
    range.insertNode(wrapper);
    return true;
  }
}