import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#TagElement
 */
export class TagElement extends VITAL_Node {
  public openingTag?: boolean;
  public endPosition?: number;
  public startPosition?: number;
  public standaloneTag?: boolean;
  public closingTag?: boolean;
  public tagValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#TagElement';
  }

  /**
   * Get property definitions for TagElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isOpeningTag',
        tsPropertyName: 'openingTag',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndPosition',
        tsPropertyName: 'endPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartPosition',
        tsPropertyName: 'startPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isStandaloneTag',
        tsPropertyName: 'standaloneTag',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isClosingTag',
        tsPropertyName: 'closingTag',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTagValue',
        tsPropertyName: 'tagValue',
        type: 'string',
        required: false
      }
    ];
  }


}
