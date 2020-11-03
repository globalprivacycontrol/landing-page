import { readFile } from 'fs/promises';
import yaml from 'js-yaml';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

const mdProcessor = remark().use(remarkHtml);

export async function parseMarkdown(filePath) {
  const markdown = await readFile(filePath, 'utf8');

  const { data, content, sections } = matter(markdown, {
    section: function (section) {
      if (typeof section.data === 'string' && section.data.trim() !== '') {
        section.data = yaml.safeLoad(section.data);
      }
      section.content = section.content.trim();
    },
    excerp: true
  });

  let html = '';
  if (content && content.trim() !== '') {
    html = (await mdProcessor.process(content.trim())).toString();
  }

  if (sections) {
    for (const section of sections) {
      if (section.content && section.content.trim() !== '') {
        section.html = (
          await mdProcessor.process(section.content.trim())
        ).toString();
        delete section.content;
      }
    }
  }

  return { data, html, sections };
}
