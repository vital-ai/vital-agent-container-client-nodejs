import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGIndexDocumentAttempt
 */
export class Edge_hasKGIndexDocumentAttempt extends VITAL_PeerEdge {
  public kGJSON?: string;
  public kGIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGIndexDocumentAttempt';
  }

  /**
   * Get property definitions for Edge_hasKGIndexDocumentAttempt
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGJSON',
        tsPropertyName: 'kGJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifier',
        tsPropertyName: 'kGIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGIndexDocumentAttempt
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGIndexDocumentAttempt';
  }
}
