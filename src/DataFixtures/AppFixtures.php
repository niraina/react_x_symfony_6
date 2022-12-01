<?php

namespace App\DataFixtures;

use App\Entity\Articles;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 20; $i++) {
            $article = new Articles;
            $article->setTitle('title '.$i);
            $article->setDescription('lorem ipsum'.$i);
            $article->setCreatedAt(new \DateTime('06/04/2023'));
            $manager->persist($article);
        }

        $manager->flush();
    }
}
