import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#SocialMediaAccount
 */
export class SocialMediaAccount extends VITAL_Node {
  public pictureURL?: string;
  public socialLikeCount?: number;
  public accessToken?: string;
  public tokenValid?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#SocialMediaAccount';
  }

  /**
   * Get property definitions for SocialMediaAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPictureURL',
        tsPropertyName: 'pictureURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLikeCount',
        tsPropertyName: 'socialLikeCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAccessToken',
        tsPropertyName: 'accessToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#isTokenValid',
        tsPropertyName: 'tokenValid',
        type: 'boolean',
        required: false
      }
    ];
  }


}
