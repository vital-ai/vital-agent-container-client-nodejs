import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIdentifier
 */
export class KGIdentifier extends KGNode {
  public kGIdentifierEnclosingID?: string;
  public kGIdentifierSecondaryID?: string;
  public kGIdentifierPrimaryID?: string;
  public kGIdentifierSourceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGIdentifier';
  }

  /**
   * Get property definitions for KGIdentifier
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierEnclosingID',
        tsPropertyName: 'kGIdentifierEnclosingID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierSecondaryID',
        tsPropertyName: 'kGIdentifierSecondaryID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierPrimaryID',
        tsPropertyName: 'kGIdentifierPrimaryID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierSourceURI',
        tsPropertyName: 'kGIdentifierSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
