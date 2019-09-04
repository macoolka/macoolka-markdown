import { printJekyllPage } from 'macoolka-document';
import { markdown } from '../markdown';
describe('Page', () => {
    it('only required', () => {
        expect(printJekyllPage({ name: 'name', layout: 'normal', nav: { order: 1 } })({ doc: markdown })).toMatchSnapshot();
    })
    it('all ', () => {
        expect(printJekyllPage({
            name: 'name',
            layout: 'normal',
            nav: {
                order: 1,
                exclude: true,
                hasChildren: true,
                permaLink: 'permaLink',
                parent: 'parent',
                toc: true,
            },
            search: {
                exclude: true,
            }
        })({ doc: markdown })
        ).toMatchSnapshot();
    })


})