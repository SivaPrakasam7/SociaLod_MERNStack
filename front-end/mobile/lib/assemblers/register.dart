import 'package:flutter/material.dart';
import '../components/backgrounds/panel.dart';
import '../components/views/title.dart';
import '../components/inputs/textfield.dart';
import '../components/intract/ciconbutton.dart';

class Register extends StatelessWidget {
  Widget build(BuildContext context) {
    return Panel(
      elements: [
        Ptitle(title: "SignUp"),
        Textfield(
          placeholder: "Name",
          icon: Icons.account_box,
          type: false,
        ),
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
        Textfield(
          placeholder: "Confrim Password",
          icon: Icons.password_outlined,
          type: true,
        ),
        Textfield(
          placeholder: "Mobile No",
          icon: Icons.contact_phone,
          type: true,
        ),
        Textfield(
          placeholder: "About",
          icon: Icons.info,
          type: true,
        ),
        Ciconbutton(icon: Icon(Icons.keyboard_arrow_right_outlined)),
      ],
      width: 300,
      height: 470,
    );
  }
}
