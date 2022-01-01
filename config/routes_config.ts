import { router as vehicleRoutes} from '../routes/vehicle_routes';

export function routesInit(app: any) {

    app.use(vehicleRoutes);
}
