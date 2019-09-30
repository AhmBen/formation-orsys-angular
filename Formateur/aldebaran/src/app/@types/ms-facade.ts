import { MsAction } from './ms-action';
import { Observable } from 'rxjs';

export interface MsFacade {

  dispatch(action: MsAction): Observable<MsAction> ;

}
