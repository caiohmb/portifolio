import type { GitHubRepo, Project } from '@/types';

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetches repositories from a GitHub user and transforms them into Project objects
 * @param username GitHub username
 * @param maxRepos Maximum number of repositories to fetch (default: 6)
 * @returns Array of Project objects
 */
export const fetchGitHubRepos = async (
  username: string,
  maxRepos: number = 6
): Promise<Project[]> => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=${maxRepos}&type=owner`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Transform GitHub repos to Project objects
    const projects: Project[] = repos
      .filter(repo => !repo.name.includes('config') && !repo.name.includes('dotfiles')) // Filter out config repos
      .map(repo => ({
        id: repo.id,
        title: repo.name
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        description: repo.description || 'No description available',
        url: repo.html_url,
        demoUrl: repo.homepage || undefined,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Unknown',
        tags: repo.topics || [],
        updatedAt: repo.updated_at,
      }));

    return projects;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};

/**
 * Formats a date string to a localized format
 * @param dateString ISO date string
 * @param locale Locale (default: 'pt-BR')
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, locale: string = 'pt-BR'): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};
