import { classRouter } from '../routes/vehicle_class_routes';
import { makeRouter } from '../routes/vehicle_make_routes';
import { router as vehicleRoutes} from '../routes/vehicle_routes';
import { typeRouter } from '../routes/vehicle_type_routes';

export function routesInit(app: any) {

    app.use(vehicleRoutes);
    app.use(typeRouter);
    app.use(makeRouter);
    app.use(classRouter);
}
