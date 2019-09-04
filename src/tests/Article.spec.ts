import { printArticle } from 'macoolka-document';
import { markdown } from '../markdown';
describe('Site', () => {
    it('only required', () => {
        expect(printArticle({})({ doc: markdown })).toMatchSnapshot();
    })
    it('all ', () => {
        expect(printArticle({
            title: 'title',
            description: 'description',
            section: [{
                title: 'section 1',
                content: 'content 1'
            }, {
                title: 'section 2',
                content: 'content 2'
            }


            ]
        })({ doc: markdown })
        ).toMatchSnapshot();
    })


})