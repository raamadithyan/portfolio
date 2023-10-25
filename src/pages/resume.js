import Page from "@/components/Page";

export default function Resume() {
  return (
    <Page>
      <div
        className="bg-[#ee0e94] w-full h-[100vh] absolute top-0 left-0 -z-10
      flex justify-center items-center
    "
      >
        <div className="  w-[80%] sm:w-[50%] h-auto flex justify-between">
          {/*Experience*/}

          <div>
            <table className="text-white ">
              <tr>
                <th>Company</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
              </tr>
            </table>
          </div>

          {/*Skills*/}

          <div>
            <table className="text-white ">
              <tr>
                <th>Skills</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Page>
  );
}
