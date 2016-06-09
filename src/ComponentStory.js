import { storiesOf, action } from '@kadira/storybook';
import Component from './Component';



storiesOf('Component', module)

    .add('test one', () => (<Component title="Hellooo" />) )

    .add('test two', () => (
        <Component
            title="Fugiat sit qui veniam sit aliqua laboris et anim nulla duis fugiat magna."
            subtitle="Minim reprehenderit quis adipisicing aliquip mollit voluptate adipisicing."
        />
    ))

    .add('test three', () => (
        <Component
            title="Dolor enim fugiat cupidatat ut minim laborum ipsum adipisicing amet enim."
            subtitle="Duis proident ea et exercitation ipsum irure laborum nostrud ut."
            text="Eu exercitation nisi ullamco qui sit laborum fugiat. Magna aliqua sunt qui minim esse esse exercitation et magna. Magna pariatur pariatur nisi nisi laboris aliquip minim ex sit aliquip commodo incididunt. Ad occaecat ad deserunt quis velit eu consequat ex exercitation ipsum. Aliquip officia cupidatat aute magna nostrud duis mollit. Quis velit nulla in aliqua consequat deserunt consequat magna. Magna do tempor eiusmod sunt non sunt ut id consectetur nulla."
        />
    ))

    .add('test four', () => (
        <Component
            title="Nulla cupidatat nulla incididunt nostrud elit elit reprehenderit culpa ut amet nulla nulla."
            subtitle="Cupidatat ipsum cupidatat irure est laboris cupidatat exercitation laborum ipsum do labore enim tempor ipsum occaecat in."
            text="Fugiat magna eiusmod magna aliquip cupidatat et elit reprehenderit incididunt. Ut reprehenderit pariatur incididunt nisi excepteur officia pariatur quis in laboris exercitation minim amet consectetur nisi mollit. Ea magna excepteur sint laborum Lorem elit reprehenderit laborum cupidatat consequat in laboris commodo. Fugiat cupidatat nulla aliquip proident sunt consectetur et. Est commodo incididunt in voluptate deserunt dolor nisi incididunt magna amet exercitation duis nulla reprehenderit culpa."
            onSubmit={action('submitted')}
        />
    ))
