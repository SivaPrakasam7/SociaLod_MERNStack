import 'package:flutter/material.dart';
import '../components/backgrounds/panel.dart';
import '../components/views/title.dart';
import '../components/inputs/textfield.dart';
import '../components/intract/ciconbutton.dart';

class Login extends StatelessWidget {
  Widget build(BuildContext context) {
    return Panel(
      elements: [
        Ptitle(title: "SignIn"),
        Textfield(
          placeholder: "Email",
          icon: Icons.email_outlined,
          type: false,
        ),
        Textfield(
          placeholder: "Password",
          icon: Icons.password_outlined,
          type: true,
        ),
        Ciconbutton(icon: Icon(Icons.keyboard_arrow_right_outlined)),
      ],
      width: 300,
      height: 250,
    );
  }
}
