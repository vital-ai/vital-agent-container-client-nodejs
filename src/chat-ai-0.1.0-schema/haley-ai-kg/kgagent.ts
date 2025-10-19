import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAgent
 */
export class KGAgent extends KGNode {
  public kGAgentModificationDateTime?: string | Date;
  public kGAgentAvatarImageURL?: string;
  public kGAgentRankingScore?: number;
  public kGAgentIdentifier?: string;
  public kGAgentPublishStatusURI?: string;
  public kGAgentAvatarLargeImageURL?: string;
  public kGAgentImplIdentifier?: string;
  public kGAgentRankingScoreUpdateDateTime?: string | Date;
  public kGAgentServiceURIs?: string;
  public kGAgentName?: string;
  public kGAgentDescription?: string;
  public kGAgentNameSlug?: string;
  public kGAgentAvatarImageSourceURL?: string;
  public kGAgentDeploymentURL?: string;
  public kGAgentType?: string;
  public kGBracketURIs?: string;
  public topCategoryURIs?: string;
  public kGAgentPublisherName?: string;
  public primaryLanguageType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAgent';
  }

  /**
   * Get property definitions for KGAgent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentModificationDateTime',
        tsPropertyName: 'kGAgentModificationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageURL',
        tsPropertyName: 'kGAgentAvatarImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScore',
        tsPropertyName: 'kGAgentRankingScore',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentIdentifier',
        tsPropertyName: 'kGAgentIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublishStatusURI',
        tsPropertyName: 'kGAgentPublishStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarLargeImageURL',
        tsPropertyName: 'kGAgentAvatarLargeImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentImplIdentifier',
        tsPropertyName: 'kGAgentImplIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScoreUpdateDateTime',
        tsPropertyName: 'kGAgentRankingScoreUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentServiceURIs',
        tsPropertyName: 'kGAgentServiceURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentName',
        tsPropertyName: 'kGAgentName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentDescription',
        tsPropertyName: 'kGAgentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentNameSlug',
        tsPropertyName: 'kGAgentNameSlug',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageSourceURL',
        tsPropertyName: 'kGAgentAvatarImageSourceURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentDeploymentURL',
        tsPropertyName: 'kGAgentDeploymentURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentType',
        tsPropertyName: 'kGAgentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGBracketURIs',
        tsPropertyName: 'kGBracketURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasTopCategoryURIs',
        tsPropertyName: 'topCategoryURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherName',
        tsPropertyName: 'kGAgentPublisherName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType',
        tsPropertyName: 'primaryLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
