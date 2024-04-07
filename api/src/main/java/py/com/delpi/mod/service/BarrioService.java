package py.com.delpi.mod.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import py.com.delpi.mod.model.Barrio;
import py.com.delpi.mod.repository.BarrioRepository;

import java.util.List;

@Service
public class BarrioService {

    @Autowired
    private BarrioRepository barrioRepository;

    public List<Barrio> obtenerBarriosPorCiudad(String ciudad){
        return barrioRepository.findByCiudadPorDepartamento(ciudad);
    }

    public List<Barrio> insertarBarrios(List<Barrio> barrios){
        return barrioRepository.saveAll(barrios);
    }

}
