import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="w-full flex items-center flex-col px-4">
        <div className="prose prose-dark">
          <h1>First Post</h1>
          <p>
            Lorem ipsum dolor sit amet, dolor quando habemus eum ut. Eum ut munere option, ornatus efficiantur necessitatibus sit ad. Ei sit quis deleniti. Meis eligendi mei ei.

            Quod ludus eos at, tantas hendrerit voluptaria pro te. Efficiendi complectitur mea eu, vim et verterem accusamus. In nam aliquam consectetuer, ne justo facete contentiones sea. Ius enim discere signiferumque eu, qui percipit iracundia argumentum ne. Percipitur voluptatibus ut nam.

            Ne tibique scribentur per, ut nam justo harum alienum, ad malis nostro indoctum qui. Id nisl expetenda vix. Tempor tamquam cu eos. Id erat zril saepe sed. Semper molestie appareat sea ei.

            Ceteros mediocritatem ea vim, te laoreet atomorum cum. Sanctus alienum repudiare in usu, posse eligendi recusabo ea sed, vel ea detracto singulis. Paulo aliquid cu qui, altera necessitatibus an nam, et tota illum ius. Mei falli dicant eu, ludus munere utamur eam id, nec ad duis noluisse. Quod denique ad sea, eu qui novum ornatus, cu alterum salutandi percipitur vim.

            Sed te assum verear accusata, at decore fierent lobortis eum. Cu altera iuvaret quo. Omittam offendit in mel, mea an mutat blandit assentior. Eam persius assentior adipiscing an, pri prima eirmod rationibus no.

          </p>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
