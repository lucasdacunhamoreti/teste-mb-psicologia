import * as express from 'express';
import * as cors from 'cors';
import routes from '../src/routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use(routes);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;