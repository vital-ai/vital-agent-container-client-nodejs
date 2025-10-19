import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount
 */
export class Edge_hasTwitterAccount extends VITAL_TaxonomyEdge {
  public twitterOAuthToken?: string;
  public oAuthTokenSecret?: string;
  public streamContextUser?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount';
  }

  /**
   * Get property definitions for Edge_hasTwitterAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterOAuthToken',
        tsPropertyName: 'twitterOAuthToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOAuthTokenSecret',
        tsPropertyName: 'oAuthTokenSecret',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#isStreamContextUser',
        tsPropertyName: 'streamContextUser',
        type: 'boolean',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasTwitterAccount
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount';
  }
}
