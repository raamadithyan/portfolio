import Page from "@/components/Page";

export default function Connect() {
  return (
    <Page>
      <div
        className="bg-[#5cc9c9] w-full h-[100vh] absolute top-0 left-0 -z-10
                        flex justify-center items-center
    "
      >
        <div className="w-[80%] sm:w-[50%] h-auto flex justify-end">
          {/*Skills*/}

          <div>
            <table className="text-white  ">
              <tbody>
                <tr>
                  <th className="text-2xl connect-table">
                    raamadithyan@gmail.com
                  </th>
                </tr>
                <tr>
                  <th className="text-2xl connect-table connect-table-bottom  ">
                    9962802830
                  </th>
                </tr>
                <tr>
                  <th className="text-2xl connect-table">Github</th>
                </tr>
                <tr>
                  <th className="text-2xl connect-table">Linkedin</th>
                </tr>
                <tr>
                  <th className="text-2xl connect-table">Behance</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Page>
  );
}
