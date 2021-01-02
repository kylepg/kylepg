import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>kylepg</title>
      </Head>
      <main>
        <svg
          id="k"
          xmlns="http://www.w3.org/2000/svg"
          width="957"
          height="957"
          viewBox="0 0 957 957"
        >
          <defs>
            <filter
              id="filter"
              x="420.656"
              y="271.625"
              width="425.282"
              height="674.875"
              filterUnits="userSpaceOnUse"
            >
              <feFlood result="flood" floodColor="#faaa4c" />
              <feComposite result="composite" operator="in" in2="SourceGraphic" />
              <feBlend result="blend" in2="SourceGraphic" />
            </filter>
            <filter
              id="filter-2"
              x="111.062"
              y="10.469"
              width="353.594"
              height="925.843"
              filterUnits="userSpaceOnUse"
            >
              <feFlood result="flood" floodColor="#fff" />
              <feComposite result="composite" operator="in" in2="SourceGraphic" />
              <feBlend result="blend" in2="SourceGraphic" />
            </filter>
          </defs>
          <g id="k-2" data-name="k">
            <path
              id="k-3"
              data-name="k"
              className="cls-1"
              d="M691.852,937.627c57.457-26.117,83.575-86.186,49.622-143.644L623.947,591.575,809.379,378.72c24.811-28.729,36.564-45.705,36.564-66.6,0-26.117-13.059-40.481-45.7-40.481H712.745c-36.564,0-58.763,13.058-84.88,43.093L462.021,511.918c-45.705,53.54-54.846,120.139-20.894,178.9L550.819,882.781C582.16,936.322,639.617,961.133,691.852,937.627Z"
            />
            <path
              id="k_copy"
              data-name="k copy"
              className="cls-2"
              d="M152.532,936.322h113.61c30.035,0,50.928-18.282,56.152-48.317l141.032-801.8c7.836-45.705-19.587-75.74-65.293-75.74H337.964c-45.7,0-77.046,30.035-84.881,75.74l-141.032,801.8C106.827,918.04,122.5,936.322,152.532,936.322Z"
            />
          </g>
        </svg>
      </main>
    </Layout>
  );
}
