import Layout from '../components/layout';
import USMap from '../components/us-map';

export default function MapPage() {
  return (
    <Layout title="GPC by US State — Interactive Map">
      <section className="py-5" style={{ color: 'var(--text-dark)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10 text-center">
              <h1 className="mb-3">GPC by US State</h1>
              <p className="mb-4">
                Hover a state to see if Global Privacy Control (GPC) is active
                and when it has been in effect. This map will be expanded over
                time as policies evolve across the United States.
              </p>
            </div>
            <div className="col-12">
              <USMap />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
