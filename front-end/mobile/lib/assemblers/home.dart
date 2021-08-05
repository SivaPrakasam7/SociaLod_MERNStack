import 'package:flutter/material.dart';
import '../components/backgrounds/panel.dart';
import '../components/views/title.dart';
import '../components/views/para.dart';

class Home extends StatelessWidget {
  Widget build(BuildContext context) {
    return Panel(
      elements: [
        Ptitle(title: "SociaLod"),
        Paragraph(
            cont:
                "It's based on human information from diffrent social medias. Search by user name with different social media publicly available information. That make a Human information resources with recursive search.")
      ],
      width: 350,
      height: 500,
    );
  }
}
