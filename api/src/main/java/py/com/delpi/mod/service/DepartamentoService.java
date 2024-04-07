package py.com.delpi.mod.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import py.com.delpi.mod.model.Departamento;
import py.com.delpi.mod.repository.DepartamentoRepository;

import java.util.List;

@Service
public class DepartamentoService {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    public List<Departamento> obtenerDepartamento(){
        return departamentoRepository.findAll();
    }

    public List<Departamento> insertarDepartamentos(List<Departamento> departamentos){
        return departamentoRepository.saveAll(departamentos);
    }

    public List<Departamento> obtenerListaDepartamentosPorNombre(String departamento){
        return departamentoRepository.findAllByNombreIgnoreCase(departamento);
    }

    public Departamento obtenerDepartamentoPorNombre(String departamento){
        return departamentoRepository.findByNombreIgnoreCase(departamento);
    }

}
