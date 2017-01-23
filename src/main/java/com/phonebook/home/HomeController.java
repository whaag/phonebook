package com.phonebook.home;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by eduar on 21/01/2017.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String mainView(Model model) {
        return "home";
    }
}
