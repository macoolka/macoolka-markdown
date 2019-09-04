/**
 * markdown instance on github for `Document`
 * @desczh
 * `Document`的markdown实例
 * 
 * 基于github
 * @file
 */
import { Document } from 'macoolka-document';
import { head, tail } from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

const CRLF = '\n';
const NEWLINE = '\n\n';

const replaceKeys = (a: string) => a.replace(/\|/gi, `\\|`);

/**
 * # h1
 * @since 0.2.0
 */
export const h1: Document['h1'] = title => `# ${title}`;

/**
 * ## h2
 * @since 0.2.0
 */
export const h2: Document['h2'] = title => `## ${title}`;

/**
 * ### h3
 * @since 0.2.0
 */
export const h3: Document['h3'] = title => `### ${title}`;

/**
 * #### h4
 * @since 0.2.0
 */
export const h4: Document['h4'] = title => `#### ${title}`;

/**
 * ##### h5
 * @since 0.2.0
 */
export const h5: Document['h5'] = title => `##### ${title}`;

/**
 * ###### h6
 * @since 0.2.0
 */
export const h6: Document['h6'] = title => `###### ${title}`;
/**
 * **bold**
 * @since 0.2.0
 */
export const bold: Document['bold'] = text => `**${text}**`;
/**
 * *italic*
 * @since 0.2.0
 */
export const italic: Document['italic'] = text => `*${text}*`;
/**
 * ~~del~~
 * @since 0.2.0
 */
export const del: Document['del'] = text => `~~${text}~~`;
/**
 * 'q'
 * @since 0.2.0
 */
export const q: Document['q'] = text => `'${text}'`;
/**
 * **cite**
 * @since 0.2.0
 */
export const cite: Document['cite'] = text => `**${text}**`;
/**
 * **dfn**
 * @since 0.2.0
 */
export const dfn: Document['dfn'] = text => `**${text}**`;
/**
 * **ins**
 * @since 0.2.0
 */
export const ins: Document['ins'] = text => `**${text}**`;
/**
 * **mark**
 * @since 0.2.0
 */
export const mark: Document['mark'] = text => `**${text}**`;
/**
 * **em**
 * @since 0.2.0
 */
export const em: Document['em'] = text => `**${text}**`;
/**
 * 1. ol1
 * 1. ol2"
 * @since 0.2.0
 */
export const ol: Document['ol'] = as => as.map(a => `1. ${a}`).join(CRLF) + NEWLINE;
/**
 * - ul1
 * - ul2"
 *
 *
 * @since 0.2.0
 */
export const ul: Document['ul'] = as => as.map(a => `- ${a}`).join(CRLF) + NEWLINE;
/**
 * article
 *
 *
 * @since 0.2.0
 */
export const article: Document['article'] = text => text + NEWLINE;
/**
 * p
 *
 *
 * @since 0.2.0
 */
export const p: Document['p'] = text => text + NEWLINE;
/**
 * br
 *
 * @since 0.2.0
 */
export const br: Document['br'] = (text) => text + CRLF;
/**
 * [link](/link)
 * @since 0.2.0
 */
export const link: Document['link'] = (text, href) => `[${text}](${href})`;
/**
 * ![img](https://cdn.pixabay.com/photo/2019/08/12/14/23/wedding-4401383_960_720.jpg)
 * @since 0.2.0
 */
export const img: Document['img'] = (text, href) => `![${text}](${href})`;
/**
 * ```ts
 *
 * import a from 'a'
 *
 * ```
 *
 *
 * @since 0.2.0
 */
export const code: Document['code'] = language => a => `\`\`\`${language}${NEWLINE}${a}${NEWLINE}\`\`\`` + NEWLINE;
/**
 * ---
 *
 *
 * @since 0.2.0
 */
export const hr: Document['hr'] = () => '---' + NEWLINE;
/**
 * section
 *
 * @since 0.2.0
 */
export const section: Document['section'] = text => text + NEWLINE;
/**
 * > blockquote 1
 * > blockquote 2"
 *
 *
 * @since 0.2.0
 */
export const blockquote: Document['blockquote'] = as => as.map(a => `> ${a}`).join(CRLF) + NEWLINE;
/**
 * |  head1 | head2  |
 * |  --- | ---  |
 * |  11 | 12  |
 * |  21 | 22  |
 * @since 0.2.0
 */
export const table: Document['table'] = (as: string[][]) => {
    const header = pipe(
        head(as),
        O.map(a =>
            `${CRLF}| ${a.map(replaceKeys).map(v => ` ${v.trim()} `).join('|')} |${CRLF}`
            + `| ${a.map(() => ' --- ').join('|')} |${CRLF}`),
        O.getOrElse(() => '')
    );
    const body = pipe(
        tail(as),
        O.map(
            row =>
                row.map(a =>
                    `| ${a.map(replaceKeys).map(v => ` ${v.trim()} `).join(`|`)} |`).join(CRLF)),
        O.getOrElse(() => '')
    );
    return header + body + CRLF;
};

/**
 * markdown instance on github
 * @desczh
 * 基于github markdown
 */
export const markdown: Document = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    bold,
    italic,
    del,
    q,
    cite,
    dfn,
    ins,
    mark,
    em,
    ol,
    ul,
    article,
    p,
    br,
    link,
    img,
    code,
    hr,
    table,
    section,
    blockquote,

};
