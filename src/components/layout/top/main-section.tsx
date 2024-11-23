import { Button, Card, Container, Grid, Heading } from "ui";
import { IconBook, IconDashboard, IconFolder } from "justd-icons";

const MainSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <Container className="py-6 px-0 lg:px-0 md:py-16">
        <div className="text-center">
          <Heading level={1} className="text-2xl md:text-4xl font-bold mb-6">
            記事管理をもっとシンプルに
          </Heading>
          <p className="text-base md:text-xl text-muted-foreground mb-8">
            気になる記事やサイトを簡単に管理。学習の進捗を可視化し、
            効率的な情報管理を実現します。
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="medium" appearance="solid">
              無料で始める
            </Button>
            <Button size="medium" appearance="outline">
              使い方を見る
            </Button>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <Container className="py-8 px-0 lg:px-0 md:py-16">
        <Heading level={2} className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          主な機能
        </Heading>
        <Grid className="gap-6 md:grid-cols-3">
          <Card className="p-3 md:p-4">
            <IconBook className="size-8 md:size-10 mb-4" />
            <Heading level={3} className="text-xl md:text-2xl font-semibold mb-3">
              シンプルな記事管理
            </Heading>
            <p className="text-muted-foreground text-base md:text-lg">
              URLを保存するだけで簡単に記事を管理。
              タイトルとカテゴリを設定して整理できます。
            </p>
          </Card>

          <Card className="p-3 md:p-4">
            <IconFolder className="size-8 md:size-10 mb-4" />
            <Heading level={3} className="text-xl md:text-2xl font-semibold mb-3">
              カテゴリ分類
            </Heading>
            <p className="text-muted-foreground text-base md:text-lg">
              タグやカテゴリで記事を整理。
              必要な情報をすぐに見つけることができます。
            </p>
          </Card>

          <Card className="p-3 md:p-4">
            <IconDashboard className="size-8 md:size-10 mb-4" />
            <Heading level={3} className="text-xl md:text-2xl font-semibold mb-3">
              進捗管理
            </Heading>
            <p className="text-muted-foreground text-base md:text-lg">
              ダッシュボードで学習の進捗を可視化。
              モチベーション維持をサポートします。
            </p>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default MainSection;
