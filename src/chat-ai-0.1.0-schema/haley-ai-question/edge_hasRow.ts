import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasRow
 */
export class Edge_hasRow extends VITAL_PeerEdge {
  public minimumRowCount?: number;
  public highlighted?: boolean;
  public suppressedRow?: boolean;
  public requiredRow?: boolean;
  public questionIndex?: number;
  public maximumRowCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasRow';
  }

  /**
   * Get property definitions for Edge_hasRow
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMinimumRowCount',
        tsPropertyName: 'minimumRowCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHighlighted',
        tsPropertyName: 'highlighted',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressedRow',
        tsPropertyName: 'suppressedRow',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRequiredRow',
        tsPropertyName: 'requiredRow',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionIndex',
        tsPropertyName: 'questionIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMaximumRowCount',
        tsPropertyName: 'maximumRowCount',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasRow
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasRow';
  }
}
